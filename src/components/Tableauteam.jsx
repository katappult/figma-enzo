import { React, useState} from 'react';
import '../css/Tableau.css'
import edit from '../img/edit.svg'
import trash from '../img/trash.svg'
import { Space, Table, Tag, Checkbox, Badge} from 'antd';

export default function Tableau() {

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
                            <Tag color="#F9F5FF" key={tag}>
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
        <Table columns={columns} dataSource={data} />
    )
}