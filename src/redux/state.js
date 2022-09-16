
let store =  {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: "Hello World!", likeCounts:' 3 👍' },
                { id: 2, message: "It's my first post", likeCounts:' 10 👍' },
                { id: 3, message: "Blalal", likeCounts:' 0 👍' },
                { id: 4, message: "Tururuurrru", likeCounts:' 1 👍' },
                
              ],
            newPostText: 'Kkkk',  
        
            
        },
        dialogsPage: {
            messages: [
                { id: 1, message: "Hihihihihi" },
                { id: 2, message: "dfewfsdfdfsdf f" },
                { id: 3, message: "34 24ewrew4" },
                { id: 4, message: "d few fewfef aewr a3 " },
                { id: 5, message: " sdf ewfewf ew fee" },
              ],
            dialogs: [
                { id: 1, name: "John" },
                { id: 2, name: "Sam" },
                { id: 3, name: "Leo" },
                { id: 4, name: "Nick" },
                { id: 5, name: "Max" },
                { id: 6, name: "Mona" },
                { id: 7, name: "Tomy" },
              ],  
        }, 
        sidebar: {
            friends: [
                { id: 1, name: "John" },
                { id: 2, name: "Sam" },
                { id: 3, name: "Leo" },
            ]
        } 
    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
        console.log('state changed');
    },
    addPost()  {
        let newPost = {
            id:6,
            message: postDataMessage,
            likeCounts: 0,
        };
    
        this._state.profilePage.postData.push(newPost);
        rerenderEntireTree();
    },
    updateNewPostText(newText)  {
        this._state.profilePage.newPostText = newText;
        rerenderEntireTree();
    },
    subscribe(observer) {
        rerenderEntireTree = observer;
    },  
}


export default store;

  