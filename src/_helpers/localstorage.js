const defaultData = {'notes':[
    {id:'cdc2fbe0-7744-11e9-8a98-17bbb9a61949',timestamp:'2019-05-15T19:08:20.510Z',note:'Hii there, Welcome to Reactjs Notes web application'},
    {id:"fdedc390-7744-11e9-b63d-3b9bad7b29a3",timestamp:'2019-05-15T19:08:21.510Z',note:'Add/update/delete notes'},
    {id:"353e60c0-7745-11e9-8057-9f98d1041a37",timestamp:'2019-05-15T19:08:21.510Z',note:'Deep Search feature'},
    {id:"509324a0-7745-11e9-8d30-5971d38a40d4",timestamp:'2019-05-15T19:08:25.250Z',note:"Mobile/Tablet Responsive"},
    {id:"9803deb0-7745-11e9-930a-c7777f1b39fb",timestamp:'2019-05-15T19:09:15.150Z',note:"React and Redux implementation with use of browser local storage"}
]}

export const saveState = (state) => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
};

export const loadState = () => {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
        return defaultData
    }
    return JSON.parse(serializedState);
};

