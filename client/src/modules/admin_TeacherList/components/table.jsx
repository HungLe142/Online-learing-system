import { useState, useRef, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import Dialog from './Dialog';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import axios from 'axios';

const TeachertList = () => {
  const [students, setStudents] = useState([
    { Name: 'Nguyên liệu A', "StudentID": 1, "EmailAddress": 'emailA@example.com', Class: 'Loại 1', Gender: 'Male' },
    { Name: 'Nguyên liệu B', "StudentID": 2, "EmailAddress": 'emailB@example.com', Class: 'Loại 2', Gender: 'Female' },
    { Name: 'Nguyên liệu C', "StudentID": 3, "EmailAddress": 'emailC@example.com', Class: 'Loại 3', Gender: 'Male' },
  ]);
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [newStudent, setNewStudent] = useState({
    Name: '',
    StudentID: 0,
    EmailAddress: '',
    Class: '',
    Gender: '',
  });
  const [searchValue, setSearchValue] = useState('');
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);
  const toast = useRef(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/ingredient', {
          params: { id: 1 },
        });

        const rawStudents = response.data.data;
        const mappedStudents = rawStudents.map(student => ({
          Name: student.NguyenLieuName,
          StudentID: student.NguyenLieuId,
          EmailAddress: student.NguyenLieuEmail,
          Class: student.NguyenLieuType,
          Gender: student.NguyenLieuGender,
        }));

        setStudents(mappedStudents);
      } catch (error) {
        toast.current?.show({ severity: 'error', summary: 'Lỗi', detail: 'Không thể tải dữ liệu sinh viên', life: 3000 });
      }
    };

    fetchStudents();
  }, []);

  const addStudent = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/ingredient', {
        ...newStudent,
        managerId: 1,
      });

      const addedStudent = response.data.data;
      setStudents([...students, { ...newStudent, StudentID: addedStudent }]);
      setIsDialogVisible(false);
      setNewStudent({
        Name: '',
        StudentID: 0,
        EmailAddress: '',
        Class: '',
        Gender: '',
      });
      toast.current?.show({ severity: 'success', summary: 'Thêm mới thành công', detail: 'Sinh viên đã được thêm', life: 3000 });
    } catch (error) {
      toast.current?.show({ severity: 'error', summary: 'Lỗi', detail: 'Không thể thêm sinh viên', life: 3000 });
    }
  };

  const saveStudent = async () => {
    if (!currentStudent) return;
    try {
      await axios.put(`http://localhost:8000/api/ingredient/${currentStudent.StudentID}`, {
        ...currentStudent,
        managerId: 1,
        storeId: 1,
      });

      setStudents(students.map(student => (student.StudentID === currentStudent.StudentID ? currentStudent : student)));
      setCurrentStudent(null);
      setIsDialogVisible(false);
      toast.current?.show({ severity: 'success', summary: 'Cập nhật thành công', detail: 'Thông tin sinh viên đã được cập nhật', life: 3000 });
    } catch (error) {
      toast.current?.show({ severity: 'error', summary: 'Lỗi', detail: 'Không thể cập nhật sinh viên', life: 3000 });
    }
  };

  const deleteSelectedStudents = async () => {
    try {
      await Promise.all(
        selectedStudents.map(student => axios.delete(`http://localhost:8000/api/ingredient/${student.StudentID}`))
      );
      setStudents(students.filter(student => !selectedStudents.includes(student)));
      setSelectedStudents([]);
      toast.current?.show({ severity: 'success', summary: 'Xóa thành công', detail: 'Sinh viên đã được xóa', life: 3000 });
    } catch (error) {
      toast.current?.show({ severity: 'error', summary: 'Lỗi', detail: 'Không thể xóa sinh viên', life: 3000 });
    }
  };

  const onSearchChange = e => {
    setSearchValue(e.target.value);
  };

  const filteredStudents = students.filter(student =>
    student.Name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="card">
      <Toast ref={toast} />
      <h5 className='mb-4'>Danh sách Sinh viên</h5>

      <div className="p-d-flex p-jc-between p-mb-4">
        <InputText
          placeholder="Tìm kiếm theo tên sinh viên"
          value={searchValue}
          onChange={onSearchChange}
          className="p-inputtext-sm"
          style={{ width: '400px' }}
        />
        <Button
          label="Thêm mới"
          icon="pi pi-plus"
          className="p-button-sm p-button-success"
          onClick={() => setIsDialogVisible(true)}
        />
        <Button
          label="Xóa đã chọn"
          icon="pi pi-trash"
          className="p-button-sm p-button-danger"
          onClick={deleteSelectedStudents}
          disabled={selectedStudents.length === 0}
        />
      </div>

      <DataTable
        value={filteredStudents}
        paginator
        rows={5}
        responsiveLayout="scroll"
        selection={selectedStudents}
        onSelectionChange={e => setSelectedStudents(e.value)}
        dataKey="StudentID"
        selectionMode="multiple"
      >
        <Column selectionMode="multiple" headerStyle={{ width: '3em' }} />
        <Column field="Name" header="Họ và tên" sortable />
        <Column field="StudentID" header="Mã số sinh viên" sortable />
        <Column field="EmailAddress" header="Email" sortable />
        <Column field="Class" header="Lớp" sortable />
        <Column field="Gender" header="Giới tính" sortable />
        <Column
          body={rowData => (
            <Button
              icon="pi pi-pencil"
              className="p-button-text p-button-warning"
              onClick={() => {
                setCurrentStudent(rowData);
                setIsDialogVisible(true);
              }}
            />
          )}
          header="Chỉnh sửa"
        />
      </DataTable>

      <Dialog
        visible={isDialogVisible}
        title={currentStudent ? 'Chỉnh sửa sinh viên' : 'Thêm mới sinh viên'}
        onHide={() => {
          setIsDialogVisible(false);
          setCurrentStudent(null);
        }}
        onSubmit={currentStudent ? saveStudent : addStudent}
      >
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="Name">Họ và tên</label>
            <InputText
              id="Name"
              value={currentStudent ? currentStudent.Name : newStudent.Name}
              onChange={e =>
                currentStudent
                  ? setCurrentStudent({ ...currentStudent, Name: e.target.value })
                  : setNewStudent({ ...newStudent, Name: e.target.value })
              }
            />
          </div>
          <div className="p-field">
            <label htmlFor="EmailAddress">Email</label>
            <InputText
              id="EmailAddress"
              value={currentStudent ? currentStudent.EmailAddress : newStudent.EmailAddress}
              onChange={e =>
                currentStudent
                  ? setCurrentStudent({ ...currentStudent, EmailAddress: e.target.value })
                  : setNewStudent({ ...newStudent, EmailAddress: e.target.value })
              }
            />
          </div>
          <div className="p-field">
            <label htmlFor="Class">Lớp</label>
            <InputText
              id="Class"
              value={currentStudent ? currentStudent.Class : newStudent.Class}
              onChange={e =>
                currentStudent
                  ? setCurrentStudent({ ...currentStudent, Class: e.target.value })
                  : setNewStudent({ ...newStudent, Class: e.target.value })
              }
            />
          </div>
          <div className="p-field">
            <label htmlFor="Gender">Giới tính</label>
            <InputText
              id="Gender"
              value={currentStudent ? currentStudent.Gender : newStudent.Gender}
              onChange={e =>
                currentStudent
                  ? setCurrentStudent({ ...currentStudent, Gender: e.target.value })
                  : setNewStudent({ ...newStudent, Gender: e.target.value })
              }
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default TeachertList;
