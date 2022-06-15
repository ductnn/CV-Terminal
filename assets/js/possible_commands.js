var possibleCommands = {
    
    exit: [
        'exit',
        'gui',
        'exit && show gui',
        'poweroff',
        'home'
    ],

    clear: [
        "clear",
        "site --help",
        "--help",
        "help",
        "man"
    ],

    // download resume
    resume: [
        'resume',
        'cv',
        'wget resume',
        'wget cv'
    ],

    view_resume: [
        'echo resume',
        'echo cv',
        'ls resume',
        'ls cv',
    ],

    skills: [
        'ls skills',
        'echo skills',
        'skills',
        'skill',
        'technical',
        'code',
        'technical skills',
        'technical_skills'
    ],

    experiences: [
        'experiences',
        'ls experiences',
        'echo experiences',
        'experience',
        'ls experience',
        'echo experience',
        'job',
        'echo job',
        'ls job'
    ],

	projects: [
        'projects',
        'ls projects',
        'echo projects',
        'project',
        'ls project',
        'echo project'
    ],

	edu: [
        'edu',
        'ls edu',
        'echo edu',
        'education',
        'ls education',
        'echo education'
    ],
};
