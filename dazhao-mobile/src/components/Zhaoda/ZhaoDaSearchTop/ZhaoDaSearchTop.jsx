import React from 'react';
import "./ZhaoDaSearchTop.scss";
import { Link } from 'react-router';

class ZhaoDaSearchTop extends React.Component{
    render(){
        return(
            <div className="ZhaoDaSearchTop">
                <header>
                    <div className="search">
                        <span >取消</span>
                        <input type="text"
                        placeholder="Michael"
                        />
                      <span>搜索</span>
                    </div>
                </header>
                <nav>
                    <ul>
                        <Link activeClassName="active" to="search">
                            <li>问答</li>
                        </Link>
                        <Link activeClassName="active" to="talk">
                            <li>话题</li>
                        </Link>
                        <Link activeClassName="active" to="zhuanlan">
                            <li>专栏</li>
                        </Link>
                        <Link activeClassName="active" to="user">
                            <li>用户</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default ZhaoDaSearchTop;
