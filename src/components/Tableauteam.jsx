import { React, useState} from 'react';
import '../css/Tableau.css'
import edit from '../img/edit.svg'
import trash from '../img/trash.svg'
import Addteammembers from './Addteammembers';
import Confirmation from './Confirmation';
import { Space, Table, Tag, Checkbox, Badge, Button, Modal } from 'antd';

export default function Tableau() {

    const [modalAddMemberOpen, setModalAddMemberOpen] = useState(false);
    const [modalAddButtonOpen, setModalAddButtonOpen] = useState(false);

    const [email, setEmail] = useState("");
    const [isSaveEnabled, setIsSaveEnabled] = useState(false);

    const handleChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        updateSaveButtonState(value);
    }

    const isValidEmail = (email) => {
        // Cette fonction vérifie que le mail entré respecte le format texte@domaine.com
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      };

    const updateSaveButtonState = (emailValue) => {
        const isFilled = emailValue != "";
        const isValidEmailAdress = isValidEmail(emailValue);

        setIsSaveEnabled(isFilled && isValidEmailAdress);
    }

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const onSelectChange = (selectedRowKeys) => {
        setSelectedRowKeys(selectedRowKeys);
        setSelectAll(selectedRowKeys.length === data.length || (selectedRowKeys.length > 0 && selectedRowKeys.length < data.length));
    };

    const onSelectAllChange = (e) => {
        const selectAllChecked = e.target.checked;
        setSelectAll(selectAllChecked);
        if (selectAllChecked) {
            setSelectedRowKeys(data.map((record) => record.key));
        } else {
            setSelectedRowKeys([]);
        }
    };

    const onSingleSelectChange = (recordKey) => {
        if (selectedRowKeys.includes(recordKey)) {
            setSelectedRowKeys(selectedRowKeys.filter((key) => key !== recordKey));
        } else {
            setSelectedRowKeys([...selectedRowKeys, recordKey]);
        }
    };

    function supprimerEspaces(chaine) {
        return chaine.replace(/\s/g, '');
    }

    const data = [
        {
            key: '1',
            name: 'John Brown',
            role: 'Admin',
            date: 'Feb 22, 2022',
            tags: ['App 1', 'App 2'],
        },
        {
            key: '2',
            name: 'Jim Green',
            role: 'Editor',
            date: 'Feb 22, 2022',
            tags: ['App 1', 'App 2'],
        },
        {
            key: '3',
            name: 'Joe Black',
            role: 'Editor',
            date: 'Feb 22, 2022',
            tags: ['App 2', 'App 3'],
        },
    ];

    const columns = [
        {
            title: (
                <Checkbox
                indeterminate={selectedRowKeys.length > 0 && selectedRowKeys.length < data.length}
                checked={selectAll}
                onChange={onSelectAllChange}
                />
            ),
            key: 'checkbox',
            render: (_, record) => (
                <Checkbox 
                onChange={() => onSingleSelectChange(record.key)} // Utilisez la nouvelle fonction onSingleSelectChange
                checked={selectedRowKeys.includes(record.key)}
                />
            ),
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <div className="section-label2">
                                    <p className="label-title">{text}</p>
                                    <p className="label-description">{supprimerEspaces(text.toLowerCase())}@mail.com</p>
                                </div>,
        },
        {
            title: 'Status',
            key: 'state',
            render: () => <Badge status="success" text="Active" />,
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },

        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },

        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (tags) => (
                <>
                    {tags.map((tag) => {
                        return (
                            <Tag color="#F9F5FF" key={tag} className='enzo'>
                                {tag}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a><img src={edit} alt="edit" /></a>
                    <a><img src={trash} alt="trash" /></a>
                </Space>
            ),
        },
    ];

    

    return (
        <div className="content">
        <div className="tab-header">
          <div className="section-header">
            <p className="header-title">Team members</p>
            <p className="description">
              Manage your team members and their account permissions here.
            </p>
          </div>
          <a href="#" className='link-label'><label className="add-btn" htmlFor='idAddMember'> + Add Team Member</label></a> 
          <button type="primary" onClick={() => setModalAddMemberOpen(true)} id='idAddMember' style={{display: 'none'}}>
            Vertically centered modal dialog
          </button>
          <Modal
            title="Add Team Member"
            centered
            open={modalAddMemberOpen}
            onOk={() => setModalAddMemberOpen(false)}
            onCancel={() => setModalAddMemberOpen(false)}
            footer={null}
          >
            <div className='modal-container'>
              <Addteammembers value_input={email} handleOnChange={handleChange}/>
            </div>
            <div className='modal-footer'>
                <a href="#"><button className="action-white">Cancel</button></a>
                {isSaveEnabled ? 
                    <a href="###" className='link-label'><label className="save-label save-label-activated"  htmlFor='idAddButton'>Add</label></a> 
                    : 
                    <a href="###" className='link-label'><button className="save-label" htmlFor='idAddButton' disabled>Add</button></a>
                }
                <button type="primary" onClick={() => setModalAddButtonOpen(true)} id='idAddButton' style={{display: 'none'}}>
                    Vertically centered modal dialog
                </button>
                <Modal
                    title="Add Team Member"
                    centered
                    open={modalAddButtonOpen}
                    onOk={() => setModalAddButtonOpen(false)}
                    onCancel={() => setModalAddButtonOpen(false)}
                    footer={null}
                    >
                    <div className='modal-container'>
                        <Confirmation message="Invite Sent" description="We have sent an invitation email to your team members. Notify your team members to confirm the email to join you on the Katappult platform." />
                    </div>
                    <a href="###" className='link-label'><label className="action-white-close"  htmlFor='idClosePayment'>Close</label></a> 
                    <Button type="primary" onClick={() => setModalAddButtonOpen(false)} id='idClosePayment'>
                        Vertically centered modal dialog
                    </Button>
                </Modal>
            </div>
          </Modal>
        </div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}