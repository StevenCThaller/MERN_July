import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Tabs = props => {
    const { tabs, setTabs } = props;
    const [display, setDisplay] = useState([])

    useEffect(() => {
        axios.get(tabs[0].url)
            .then(response =>{
                setDisplay(response.data.results);
            })
            .catch(error => {
                setDisplay(["An error occurred"])
            })
    }, [])

    const changeTab = (e, i) => {
        const [...curTabs] = tabs;

        for(let tab of curTabs){
            tab.selected = false;
        }

        setDisplay("awaiting response...")

        axios.get(curTabs[i].url)
            .then(response => {
                console.log(response.data.results);
                setDisplay(response.data.results);
            })
        
        console.log("This is a couple of lines AFTER the get request was sent");
        curTabs[i].selected = true;
        setTabs(curTabs);


    }

    return (
        <div className="row">
            <div className="col-sm-12">

            {
                tabs.map((tab, i) => 
                <button key={i} onClick={ e => changeTab(e, i) } className={ tab.selected ? 'col-sm-3 m-1 btn btn-primary' : 'col-sm-3 m-1 btn btn-secondary' }>{tab.title}</button>
                )
            }
            </div>
            <div className="col-sm-12">
                {
                    display == "awaiting response..." ?
                    display
                    :
                    <ul>
                        {
                            display.map((item, i) =>
                            <li key={i}>{item.name}</li>                        )    
                        }
                    </ul>
                }
            </div>
        </div>
    )
}

export default Tabs
