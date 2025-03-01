import { Button, Form, Input, Modal, Select, Switch, Table } from "antd";
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

  return (
    <>
      <h2>{title}</h2>
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Добавить
      </Button>
      <Table
        dataSource={staffList}
        columns={[
          { title: "ФИО", dataIndex: "fullName" },
          { title: "Отделение", dataIndex: "department" },
          {
            title: "Действия",
            render: (_, record) => (
              <>
                <Button onClick={() => handleEdit(record)}>
                  Редактировать
                </Button>
                <Button danger onClick={() => handleDelete(record.id)}>
                  Удалить
                </Button>
              </>
            ),
          },
        ]}
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
