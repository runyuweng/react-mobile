import React from "react";
import "./ConcernUser.scss";
import ajax from "../../../services/ajax.js";

class ConcernUser extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            caredUsers:[
                {
                    id:1,
                    userimg:"src/images/pople.png",
                    name:"Michael",
                    position:'国际教练协会（IFC）认证教练国际教练协会（IFC）认证教练'
                },
                {
                    id:2,
                    userimg:"src/images/pople.png",
                    name:"Michael",
                    position:'国际教练协会（IFC）认证教练国际教练协会（IFC）认证教练'
                },
                {
                    id:3,
                    userimg:"src/images/pople.png",
                    name:"Michael",
                    position:'国际教练协会（IFC）认证教练国际教练协会（IFC）认证教练'
                }
            ],
            page:1
        };
        this.fetchUsers = this.fetchUsers.bind(this);

    }
    componentDidMount() {
        this.fetchUsers(this.state.page);
    }

    fetchUsers(page){
        ajax({"url":`/mycareuser?page=${page}`}).
        then((data)=>{
            if(data.code==="S01"){
                const caredUsers = data.contents;
                this.setState({
                    caredUsers:this.state.caredUsers.push(caredUsers)
                })
            }else if (data.code==="S02") {
                
            }else{
                this.setState({
                    caredUsers:this.state.caredUsers
                })
            }
        })
    }

    render () {

        const { caredUsers } = this.state;
        const caredUsersList = caredUsers.map((elem,index)=>{
            return(
                <div key={index} className="item">
                    <div className="left">
                        <span className="circle">
                            <img src={elem.userimg} alt="头像" />
                        </span>
                        <p>
                            <span>{elem.name}</span><br />
                            <span>{elem.position}</span>
                        </p>
                    </div>
                    <span className="right">+取消关注</span>
                </div>
            )
        })

        return (
            <div id="concernUser">
                {caredUsersList}
            </div>
        );

    }
}

export default ConcernUser;
