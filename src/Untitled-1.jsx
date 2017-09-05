import React from 'react';

const priorityClass = (priority) => {
    switch (priority) {
        case '1':
            return 'alert-success';
        case '2':
            return 'alert-warning';
        case '3':
            return 'alert-danger';
    }

}


export default props => {
    console.log(props.index);
    return (
        <div style={{ marginBottom: 0 + 'px' }} className={'alert ' + priorityClass(props.priority)}>
            <div style={{ marginBottom: 20 + 'px' }}>
                <input style={{ float: 'left' }} id='check' type='checkbox' />
                <p className=''><strong>{props.description}</strong></p>
                <div style={{ float: 'right' }}>
                    <span className='glyphicon glyphicon-edit'> </span>
                    <a onClick={props.onDelete}><span className='glyphicon glyphicon-trash'> </span></a>
                </div>
            </div>
        </div>
    );
};