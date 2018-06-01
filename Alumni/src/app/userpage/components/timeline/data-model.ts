export class Post {
    userId: any;
    photoAttachedPath: any;
    content: string;
}

export class ReceivedPost {
    content : any;
    photoAttachedPath : any;
    postingDate : any;
}

export class UploadDTO{
    fileSavedName: string;
    userEmail: string;
}