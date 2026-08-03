export interface TimelineEvent {

    title: string;

    description: string;

    date: string;
}

const timeline = [

    {

        title: "CipherLink",

        description:
            "Initial secure messaging experiment.",

        date: "Semester 1"

    },

    {

        title: "Old2",

        description:
            "Architecture rewrite using AI.",

        date: "Semester 4"

    },

    {

        title: "Matrix Migration",

        description:
            "Adopted Matrix instead of reinventing messaging.",

        date: "Semester 5"

    }

];

export default timeline;
