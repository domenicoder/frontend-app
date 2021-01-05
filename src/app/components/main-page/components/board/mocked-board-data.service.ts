import { Injectable, EventEmitter } from '@angular/core';


interface Content {
    title: String;
    upvote: number;
    comments: number;
    views:number;
    category: String;
    isOnFire:boolean;
    timeAgo:number;
    imageUrl:String;
  }

@Injectable()
export class MockedBoardDataService {
    
    private mockedData : Array<Content> = [ 
    {
        title: "Some title for test,Some title for test",
        upvote: 10,
        comments: 5,
        views:550,
        category: "Anime",
        isOnFire: false,
        timeAgo: 4,
        imageUrl:"sarasa"
    },
    {
        title: "Some title for test,Some title for test",
        upvote: 20,
        comments: 40,
        views:1000,
        category: "Ciencia",
        isOnFire: false,
        timeAgo: 4,
        imageUrl:"sarasa"
    },
    {
        title: "Some title for test,Some title for test",
        upvote: 20,
        comments: 40,
        views:1000,
        category: "Cine",
        isOnFire: false,
        timeAgo: 4,
        imageUrl:"sarasa"
    },
    {
        title: "Some title for test,Some title for test",
        upvote: 40,
        comments: 68,
        views:400,
        category: "Computacion",
        isOnFire: false,
        timeAgo: 4,
        imageUrl:"sarasa"
    },
    {
        title: "Some title for test,Some title for test",
        upvote: 20,
        comments: 40,
        views:1000,
        category: "Deportes",
        isOnFire: false,
        timeAgo: 4,
        imageUrl:"sarasa"
    },
    {
        title: "Some title for test,Some title for test",
        upvote: 20,
        comments: 40,
        views:1000,
        category: "Economia",
        isOnFire: false,
        timeAgo: 4,
        imageUrl:"sarasa"
    },
    {
        title: "Some title for test,Some title for test",
        upvote: 20,
        comments: 40,
        views:1000,
        category: "Filosofia",
        isOnFire: false,
        timeAgo: 4,
        imageUrl:"sarasa"
    },
    {
        title: "Some title for test,Some title for test",
        upvote: 20,
        comments: 40,
        views:1000,
        category: "Memes",
        isOnFire: false,
        timeAgo: 4,
        imageUrl:"sarasa"
    },
    {
        title: "Some title for test,Some title for test",
        upvote: 20,
        comments: 40,
        views:1000,
        category: "Economia",
        isOnFire: false,
        timeAgo: 4,
        imageUrl:"sarasa"
    },
    {
        title: "Some title for test,Some title for test",
        upvote: 20,
        comments: 40,
        views:1000,
        category: "Juegos",
        isOnFire: false,
        timeAgo: 4,
        imageUrl:"sarasa"
    },
    {
        title: "Some title for test,Some title for test",
        upvote: 20,
        comments: 40,
        views:1000,
        category: "Economia",
        isOnFire: false,
        timeAgo: 4,
        imageUrl:"sarasa"
    },
    {
        title: "Some title for test,Some title for test",
        upvote: 20,
        comments: 40,
        views:1000,
        category: "Gastronomia",
        isOnFire: false,
        timeAgo: 4,
        imageUrl:"sarasa"
    },
    {
        title: "Some title for test,Some title for test",
        upvote: 20,
        comments: 40,
        views:1000,
        category: "Memes",
        isOnFire: false,
        timeAgo: 4,
        imageUrl:"sarasa"
    },
    {
        title: "Some title for test,Some title for test",
        upvote: 20,
        comments: 40,
        views:1000,
        category: "Literatura",
        isOnFire: false,
        timeAgo: 4,
        imageUrl:"sarasa"
    },
    {
        title: "Some title for test,Some title for test",
        upvote: 20,
        comments: 40,
        views:1000,
        category: "Economia",
        isOnFire: false,
        timeAgo: 4,
        imageUrl:"sarasa"
    },
    {
        title: "Some title for test,Some title for test",
        upvote: 20,
        comments: 40,
        views:1000,
        category: "Memes",
        isOnFire: false,
        timeAgo: 4,
        imageUrl:"sarasa"
    },
    {
        title: "Some title for test,Some title for test",
        upvote: 20,
        comments: 40,
        views:1000,
        category: "Musica",
        isOnFire: false,
        timeAgo: 4,
        imageUrl:"sarasa"
    },
    {
        title: "Some title for test,Some title for test",
        upvote: 20,
        comments: 40,
        views:1000,
        category: "Paranormal",
        isOnFire: false,
        timeAgo: 4,
        imageUrl:"sarasa"
    },
    {
        title: "Some title for test,Some title for test",
        upvote: 20,
        comments: 40,
        views:1000,
        category: "Politica",
        isOnFire: false,
        timeAgo: 4,
        imageUrl:"sarasa"
    },
    {
        title: "Some title for test,Some title for test",
        upvote: 20,
        comments: 40,
        views:1000,
        category: "Programacion",
        isOnFire: false,
        timeAgo: 4,
        imageUrl:"sarasa"
    },
    {
        title: "Some title for test,Some title for test",
        upvote: 20,
        comments: 40,
        views:1000,
        category: "Social",
        isOnFire: false,
        timeAgo: 4,
        imageUrl:"sarasa"
    },
]

    public get $mockedData(): Array<Content> {
        return this.mockedData;
    }

    public set $mockedData(value: Array<Content>) {
        this.mockedData = value;
    }

}