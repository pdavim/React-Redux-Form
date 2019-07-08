import React from 'react';
import UserForm from './UserForm';

class User extends React.Component {
  constructor() {
    super();
    this.state = { list :[
        {
        name:"pedro",
        email:"pdavim@pdavim.com",
       
    },
    {
        name:"miguel",
        email:"miguel@pdavim.com",
        
    }
    ] };
  }



  render() {
    
    return (
        <div>
         <UserForm></UserForm>
            <table>
                <tr>
                <th>Nome</th>
                <th>Email</th>
                </tr>
                {this.state.list.map((items,key)=>{
                        return (
                            <tr key={key}>
                                <td>
                                    {items.name}
                                </td>
                                <td>
                                    {items.email}
                                </td>
                            </tr>
                    )})
                }
            </table>
        </div>
    );
  }

  
}

export default User;
