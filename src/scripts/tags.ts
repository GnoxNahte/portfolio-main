export class Tag {
    tag: string;
    childTags: Tag[];
    
    constructor(tag: string, childTags: Tag[] = []) {
        this.tag = tag;
        this.childTags = childTags;
    }
}

export const tags: Tag = new Tag("Tag Root",
    [
        new Tag("Engine\/Framework",
        [
            new Tag("Unity"),
            new Tag("Astro"),
            new Tag("SvelteKit"),
            new Tag("Obsidian"),
            new Tag("Others"),
        ]),
        new Tag("Project Type",
        [
            new Tag("School"),
            // Suggestion - Add in the different game jams like GMTK, Brackeys, etc. Only show those when Game Jam tag is added
            new Tag("Game Jam"), 
            new Tag("Personal"),
            new Tag("Client"),
        ]),
        new Tag("Platform",
        [
            new Tag("Windows"),
            new Tag("Website"),
            new Tag("WebGL"),
        ]),
        new Tag("Status",
        [
            new Tag("Ongoing"),
            new Tag("Completed"),
            new Tag("On Hold"),
            new Tag("Dropped")
        ])
    ]
);