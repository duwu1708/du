import React, { Component } from 'react';
const MyButton = function(props) {
  var com = props.flag ? <h1>AAA</h1> : <h1>BBB</h1>;
  return (
    <div>
    {com}
      <div className="form-group">
        <label htmlFor="username">Email address</label>
        <input type="text" onChange = { props.getVal } className="form-control" id="username" placeholder="用户名"/>
      </div>
      <button onClick={props.onClick}  className="btn btn-success">添加</button>
      {/*<!-- ///////////////////////////// -->*/}
      <table className="table table-bordered">
      <thead>
        <tr>
          <th className = "text-center">#</th>
          <th className = "text-center">用户名</th>
          <th className = "text-center">操作</th>
        </tr>
      </thead>
      <tbody>
        {
          props.todolist.map((item, index) => {
            return (
              <tr key = { index }>
                <th className = "text-center">{ index+1 }</th>
                <th className = "text-center">{ item }</th>
                <td className = "text-center">
                  <button onClick = { props.onDelfn.bind(this, index)} className = "btn btn-xs btn-danger">删除</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    
    </div>
  )
}

export default MyButton;
