import { React, useState} from 'react';
import '../css/Tableauteam.css'
import { Space, Table, Tag, Checkbox } from 'antd';

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

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
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
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, record) => (
                <>
                    {record.tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
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
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    

    return (
        <Table columns={columns} dataSource={data} />
    )
}