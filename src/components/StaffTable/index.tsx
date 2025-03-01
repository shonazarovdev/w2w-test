import {
  Button,
  Form,
  Input,
  Modal,
  Popconfirm,
  PopconfirmProps,
  Select,
  Switch,
  Table,
  message,
} from "antd";
import { FC, useState } from "react";

import { StaffMember } from "../../data";

interface StaffTableProps {
  title: string;
  staffList: StaffMember[];
  onUpdate: (updatedList: StaffMember[]) => void;
}

const StaffTable: FC<StaffTableProps> = ({ title, staffList, onUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<StaffMember | null>(null);
  const [form] = Form.useForm();

  const handleEdit = (member: StaffMember) => {
    setEditingMember(member);
    form.setFieldsValue(member);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    onUpdate(staffList.filter((member) => member.id !== id));
  };

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      if (editingMember) {
        onUpdate(
          staffList.map((member) =>
            member.id === editingMember.id
              ? { ...editingMember, ...values }
              : member,
          ),
        );
      } else {
        onUpdate([...staffList, { ...values, id: Date.now() }]);
      }
      setIsModalOpen(false);
      setEditingMember(null);
      form.resetFields();
    });
  };

  const handleClose = () => {
    form.resetFields();
    setEditingMember(null);
  };

  const handleDeleteConfirm = (memberId: number) => {
    handleDelete(memberId);
    message.success("Данные удалены успешно!");
  };

  const handleDeleteCancel = () => {
    message.info("Удаление отменено");
  };

  return (
    <>
      <h2 style={{ marginBottom: "0.5rem" }}>{title}</h2>
      <Button
        type="primary"
        onClick={() => setIsModalOpen(true)}
        style={{ marginBottom: "1rem" }}
      >
        Добавить
      </Button>
      <Table
        dataSource={staffList}
        tableLayout={"fixed"}
        columns={[
          { title: "ФИО", dataIndex: "fullName", width: "200px" },
          { title: "Отделение", dataIndex: "department", width: "200px" },
          {
            title: "Действия",
            width: "300px",
            render: (_, record) => (
              <>
                <Button
                  onClick={() => handleEdit(record)}
                  style={{ marginRight: "0.5rem" }}
                >
                  Редактировать
                </Button>
                <Popconfirm
                  title="Удаление данных работника"
                  description="Вы действительно хотите удалять данные работника?"
                  onConfirm={() => handleDeleteConfirm(record.id)}
                  onCancel={handleDeleteCancel}
                  okText="Да"
                  cancelText="Нет"
                >
                  <Button danger>Удалить</Button>
                </Popconfirm>
              </>
            ),
          },
        ]}
        scroll={{ x: 100 }}
        rowKey="id"
        pagination={false}
      />

      <Modal
        title={
          editingMember ? "Редактировать сотрудника" : "Добавить сотрудника"
        }
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={() => setIsModalOpen(false)}
        afterClose={handleClose}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="fullName"
            label="ФИО"
            rules={[{ required: true, message: "Введите ФИО" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="department"
            label="Отделение"
            rules={[{ required: true }]}
          >
            <Select>
              <Select.Option value="Кардиология">Кардиология</Select.Option>
              <Select.Option value="Хирургия">Хирургия</Select.Option>
            </Select>
          </Form.Item>
          {title === "Врачи" && (
            <Form.Item
              name="isHead"
              label="Заведующий отделением"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>
          )}
        </Form>
      </Modal>
    </>
  );
};

export default StaffTable;
