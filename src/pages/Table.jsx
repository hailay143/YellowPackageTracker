import React, {Component} from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';

export default class Table extends Component {

    constructor(props){
        super(props);

    this.state={
        posts: []
    }
}

 componentDidMount (){
     const ur1="https://my.api.mockaroo.com/orders.json?key=e49e6840";
     fetch(ur1, {
         method: "GET"
     }).then(response => response.json()).then(posts=>{
         this.setState({posts:posts})
     })
    }

    render(){
        const columns= [
            {  
                Header: 'Item List',  
                accessor: 'id',
               }
               ,{  
                Header: 'Status',  
                accessor: 'status' ,
                }
               
               ,{  
               Header: 'ETA',  
               accessor: 'eta' ,
               }
               ,{  
               Header: 'Parcel ID',  
               accessor: 'parcel_id',
               },
               {  
                Header: 'Sender',  
                accessor: 'sender',
                },
                {  
                  Header: 'Pickup location',  
                  accessor: 'location_name',
                  },
                  {  
                    Header: 'Receiver phone',  
                    accessor: 'user_phone',
                    },
                    {
                    /* sortable: false, 
                    filterable: false,
                    width: 40,
                    madWidth:40 */
                }
        ]
        return (
            <ReactTable
                columns={columns}
                data={this.state.posts}

                 >
                
                
            </ReactTable>
        );
    }
}
     
