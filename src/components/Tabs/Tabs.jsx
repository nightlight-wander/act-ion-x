import { useState } from "react";
import TabStyles from './Tabs.module.css';


const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);
    const tabHandler = (newActiveTab) => {
        setActiveTab(() => newActiveTab);
    }
    return (
        <div className={`${TabStyles.tabsWrapper}`}>
            <ul className={`${TabStyles.tabs}`}>
                {children.map((child) => <li className={`${TabStyles.tab} ${child.props.label === activeTab? TabStyles.active: "" }`} key={child.props.label} onClick={() => tabHandler(child.props.label)}>{child.props.label}</li>)}
            </ul>
            {
                // eslint-disable-next-line
            children.map((child) => {
                if (child.props.label === activeTab)  
                return (
                <div key={child.props.label} className={`${TabStyles.tabsContent}`}>{child.props.children}</div>
                );
            })}
        </div>
    )
}

export { Tabs }; 

//check if remote updating