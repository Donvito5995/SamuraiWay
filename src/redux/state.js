let state = {
   profilePage :{
    posts :[
        {message:'Hi everyone' , likecount: '65', id:1},
        {message:"It's me, i'm fine. What about you?" , likecount:'33', id:2}
]
   },
    dialogsPage : {
        dialogs: [
            {id: 1, name: "Sasha",},
            {id: 2, name: "Sanya",},
            {id: 3, name: "Kate",},
        ],

    },
    messages : [
        {id:1, message:"Hi"},
        {id:2, message:"How are u?"},
        {id:3, message:"Hello"},
    ]
}

export let addPost = () => {
    state.profilePage.posts.push({message: "Ololo", likecount: 0, id: 3 })
}

export default state;