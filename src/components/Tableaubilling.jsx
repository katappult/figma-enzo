import { React, useState} from 'react';
import '../css/Tableau.css'
import edit from '../img/edit.svg'
import trash from '../img/trash.svg'
import pdf from '../img/pdf.svg'
import check from '../img/check.svg'
import { Space, Table, Tag, Checkbox, Badge } from 'antd';

export default function Tableaubilling(alt) {

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
            invoice: 'Invoice #007 – Dec 2022',
            plan: 'Basic Plan',
            date: 'Dec 1, 2022',
            amount: 10.00,
            state:'Paid'
        },
        {
            key: '2',
            invoice: 'Invoice #006 – Nov 2022',
            plan: 'Basic plan',
            date: 'Nov 1, 2022',
            amount: 10.00,
            state: 'Paid'
        },
        {
            key: '3',
            invoice: 'Invoice #005 – Oct 2022',
            plan: 'Basic Plan',
            date: 'Oct 1, 2022',
            amount: 10.00,
            state: 'Paid'
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
            title: 'Invoice',
            dataIndex: 'invoice',
            key: 'invoice',
            render: (text) => <div className="flex-direction-row-tab">
                                <img src={pdf} alt={alt}/>
                                <p className="label-title">{text}</p>
                                </div>,
        },

        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },

        {
            title: 'Plan',
            dataIndex: 'plan',
            key: 'plan',
        },

        {
            title: 'Status',
            dataIndex: 'state',
            key: 'state',
            render: (text) => <div className="paid-box">
                                <img src={check} />
                                <p className="paid">{text}</p>
                              </div>,
        },

        {
            title: 'Amount',
            key: 'amount',
            dataIndex: 'amount',
            render: (text) => <p className='label-description'>USD ${text}</p>
        },
        {
            title: 'Action',
            key: 'action',
            render: (text) => <a href="#">Download</a>
        },
    ];

    

    return (
        <Table columns={columns} dataSource={data} />
    )
}