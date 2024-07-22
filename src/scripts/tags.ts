/*
    Not very efficient but since:
    - Want to have multiple levels
    - Want to get parent, child and current tag (and their paths) simple and quick
    I'm using this code. 
    
    Some things that aren't so good about it. Maybe improve in the future?
    - No type checking (previous project used enums but was hard to organise the multiple levels and convert from enum to string)
    - Efficiency: 
        - Setting the paths in the constructor is not that fast, especially if it grows with more layers.
        - But it's only doing it once and I don't have a lot of layers, so it's ok.
    - Difficult to change tags on runtime (Not doing in this project but for future projects, take note)
*/
export class Tag {
    tag: string;
    childTags: Tag[];
    parentTag: Tag | null;
    path: string;
    
    constructor(tag: string, childTags: Tag[] = []) {
        this.tag = tag;
        this.childTags = childTags;
        console.log("Created: " + this.tag);
        this.parentTag = null;
        this.path = tag;

        for (const childTag of this.childTags) {
            childTag.setParent(this);
        }
    }

    setParent(parentTag: Tag) {
        if (this.parentTag)
            console.warn("Parent tag already exists");
        
        this.parentTag = parentTag;
        this.path = `${parentTag.path}/${this.tag}`;
        UpdateChildPath(this);

        function UpdateChildPath(tag: Tag) {
            for (const childTag of tag.childTags) {
                childTag.path = `${tag.path}/${childTag.tag}`;
                UpdateChildPath(childTag);
            }
        }
    }

    // Rebuild the whole path
    getPath(): string {
        let parentTag = this.parentTag;
        let path = this.tag;
        while (parentTag !== null) {
            path = `${parentTag.tag}/${path}`;
            parentTag = parentTag.parentTag;
        }

        return path;
    }

    toString(): string {
        return this.path;
    }
}

function BuildTagMap(root: Tag, map: Map<string, Tag> = new Map()): Map<string, Tag> {
    map.set(root.tag, root);

    for (const tag of root.childTags) {
        BuildTagMap(tag, map);
    }

    return map;
}

// // Build the tag map without using Tag.path. Builds the whole path from scratch. 
// function BuildTagMap_BuildPath(root: Tag, path: string = '', map: Map<string, string> = new Map()): Map<string, string> {
//     const currPath = path ? `${path}/${root.tag}` : root.tag;
//     map.set(root.tag, currPath);

//     for (const child of root.childTags) {
//         BuildTagMap_BuildPath(child, currPath, map);
//     }
    
//     return map;
// }

export const tags: Tag = new Tag("Root",
    [
        new Tag("Engine & Framework",
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

export const tagMap = BuildTagMap(tags);

// console.log("ORIGINAL")
// tagMap.forEach((value, key) => (
//     console.log("Tag: " + value + " | " + key)
//     // console.log("Tag: " + value.getPath() + " | " + key)
// ))

// console.log("BUILD PATH")
// BuildTagMap_BuildPath(tags).forEach((value, key) => (
//     console.log("Tag: " + value + " | " + key)
// ))
