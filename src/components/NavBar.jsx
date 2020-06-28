import React from 'react';
import '../css/index.css';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import throttle from "lodash/throttle";

// used to check if scroll position has changed
let scrollTopPos = 0;

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 0,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    }
}));

// function NavTab(props) {
//     return (
//       <Tab
//         component="a"
//         onClick={(event) => {
//           event.preventDefault();
//         }}
//         {...props}
//       />
//     );
// }

const NavTabs = withStyles({
    root: {
        // backgroundColor: "#1976d2"
        backgroundColor: "black"
    },
    indicator: {
      backgroundColor: 'white',
      height: 4, 
      transition: 'none'
    //   display: "flex",
    //   justifyContent: "center",
    },
})(Tabs);

const NavTab = withStyles((theme) => ({
    root: {
        height: 60,
        // backgroundColor: "#1976d2",
        // fontWeight: theme.typography.fontWeightRegular,
        '&:hover': {
            color: 'white',
            // backgroundColor: "#115293"
            // backgroundColor: "green"
        },
        // '&:focus': {
        //     color: 'white',
        //     fontWeight: theme.typography.fontWeightBold,
        // },
    },
    selected: {
        color: 'white',
        // backgroundColor: "#115293",
        backgroundColor: "black",
        fontWeight: theme.typography.fontWeightBold,
    }
})) ((props) =>
    <Tab
        component="a"
        onClick={(event) => {
            event.preventDefault();
        }}
        {...props}
    />
);

// function setProps(tabName) {
//     return {
//       id: `nav-${tabName}`,
//       'aria-controls': `nav-tabpanel-${tabName}`,
//       label: tabName,
//       value: tabName,
//       href: `#${tabName}`
//     };
// }



const makeUnique = (hash, unique, i = 1) => {
    const uniqueHash = i === 1 ? hash : `${hash}-${i}`;
    if (!unique[uniqueHash]) {
        unique[uniqueHash] = true;
        return uniqueHash;
    }
    return makeUnique(hash, unique, i + 1);
};
  
const textToHash = (text, unique = {}) => {
    return makeUnique(
        encodeURI(
            text
            .toLowerCase()
            .replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g, "")
            .replace(/[!@#\$%\^&\*\(\)=_\+\[\]{}`~;:'"\|,\.<>\/\?\s]+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "")
        ),
        unique
    );
};

const noop = () => {};
  
function useThrottledOnScroll(callback, delay) {
    const throttledCallback = React.useMemo(() => 
        (callback ? throttle(callback, delay) : noop),
        [callback, delay]
    );
  
    React.useEffect(() => {
        if (throttledCallback === noop) return undefined;
    
        window.addEventListener("scroll", throttledCallback);
        return () => {
            window.removeEventListener("scroll", throttledCallback);
            throttledCallback.cancel();
        };
    }, [throttledCallback]);
}

export default function NavBar(props) {
    const classes = useStyles();

    const [activeState, setActiveState] = React.useState(null);
    // const [activeState, setActiveState] = React.useState("Home");

    const { tabsInScroll } = props;

    let itemsServer = tabsInScroll.map(tab => {
        const hash = textToHash(tab.text);
        return {
            icon: tab.icon || "",
            text: tab.text,
            component: tab.component,
            hash: hash,
            node: document.getElementById(hash)
        };
    });

    const itemsClientRef = React.useRef([]);
    React.useEffect(() => {
        itemsClientRef.current = itemsServer;
    }, [itemsServer]);

    const clickedRef = React.useRef(false);
    const unsetClickedRef = React.useRef(null);
    const findActiveIndex = React.useCallback(() => {

        if (activeState === null) 
            setActiveState(itemsServer[0].hash);
        if (clickedRef.current) 
            return;
    
        let active;

        // console.log("curr pos: " + document.documentElement.scrollTop);
        // console.log("window height: " + window.innerHeight);
        // console.log("bottom scroll pos: " + document.body.offsetHeight);
        // console.log("prev pos: " + scrollTopPos);
        // console.log(" ");

        if (Math.ceil(document.documentElement.scrollTop) >= document.body.offsetHeight - window.innerHeight) {
            active = itemsClientRef.current[itemsClientRef.current.length - 1];
        } else {
            scrollTopPos = document.documentElement.scrollTop;
            for (let i = itemsClientRef.current.length - 1; i >= 0; i--) {
                // No hash if we're near the top of the page
                if (document.documentElement.scrollTop < 0) {
                    active = { hash: null };
                    break;
                }
                
                const item = itemsClientRef.current[i];
                if (item.node && document.documentElement.scrollTop + (document.documentElement.clientHeight / 14) >
                    item.node.offsetTop) 
                {
                    active = item;
                    break;
                }
            }  
        }

        if (active && activeState !== active.hash) {
            setActiveState(active.hash);
        }
    }, [activeState, itemsServer]);

    useThrottledOnScroll(itemsServer.length > 0 ? findActiveIndex : null, 66);

    const handleClick = hash => () => {
        // Used to disable findActiveIndex if the page scrolls due to a click
        clickedRef.current = true;
        unsetClickedRef.current = setTimeout(() => {
        clickedRef.current = false;
        }, 1000);

        if (activeState !== hash) {
        setActiveState(hash);

        if (window)
            window.scrollTo({
                top: document.getElementById(hash).getBoundingClientRect().top + window.pageYOffset,
                behavior: "smooth"
            });
        }
    };

    React.useEffect(
        () => () => {
            clearTimeout(unsetClickedRef.current);
        },
        []
    );

    // useEffect(() => {
    //     // when component mounts, run this code
    //     var i = 0;
    //     props.compNames.forEach((name) => {
    //         const comp = document.getElementById(name);
    //         // divOffsets[name] = comp.offsetTop;
    //         divOffsets[i] = { 
    //             compName: name, 
    //             pos: comp.offsetTop 
    //         };
    //         i++;
    //     });
    //     console.log(divOffsets);
    // }, []);

    // const handleChange = (event, newSelectedTab) => {
    //     // console.log(props.compNames);
    //     if (selectedTab !== newSelectedTab) {
    //         setValue(newSelectedTab);
    //         document.getElementById(`nav-${newSelectedTab}`).className = classes.selected;
    //     }
    //     document.getElementById(newSelectedTab).scrollIntoView({ 
    //         behavior: "smooth", 
    //         block: "start" 
    //     });
    // };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" boxShadow={3}>
                <NavTabs centered value={activeState ? activeState : itemsServer[0].hash}>
                    {itemsServer.map(item2 => (
                        <NavTab
                            key={item2.hash}
                            label={item2.text}
                            onClick={handleClick(item2.hash)}
                            value={item2.hash}
                        />
                    ))}
                </NavTabs>
            </AppBar>
    
            <div className="container">
                {itemsServer.map(item1 => (
                    <article id={item1.hash} key={item1.text}>
                        {item1.component}
                    </article>
                ))}
            </div>
        </div>

        // <div className={classes.root}>
        //     <AppBar position="fixed" boxShadow={3}>
        //         <NavTabs centered={true} value={activeState} onChange={handleChange} aria-label="navigation">
        //             <NavTab {...setProps("Home")}/>
        //             <NavTab {...setProps("Introduction")}/>
        //             <NavTab {...setProps("Employment")}/>
        //             <NavTab {...setProps("Projects")}/>
        //             <NavTab {...setProps("Education")}/>
        //             <NavTab {...setProps("Skills")}/>
        //             <NavTab {...setProps("Contacts")}/>
        //         </NavTabs>
        //     </AppBar>
        // </div>
    );
}