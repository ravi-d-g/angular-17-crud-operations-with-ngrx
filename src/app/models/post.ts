export interface PostType {
    postId: number,
    userProfileUrl: string,
    userName: string,
    userDesc: string,
    postUrl: string,
    postDesc: string,
    postDate: string,
    isLike: boolean,
    isCommnet: boolean,
    isShare: boolean,
    isSave: boolean,
    likeCount: 10,
    commentCount: 10,
    commentList: [],
};

// export type { MyInterface as PostType }

// export interface MyInterface {
//     foo: string;
//     bar: () => number;
// }