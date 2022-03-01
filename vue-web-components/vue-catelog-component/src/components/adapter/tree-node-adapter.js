
export default class PhTreeNodeAdapter {
    constructor(id) {
        this.id = id
    }

    exec(data) {
        // return data
        return [{
            expanded: 0,
            label: 'Level one 1',
            children: [{
                expanded: 0,
                label: 'Level two 1-1',
                children: [{
                    label: 'Level three 1-1-1'
                }]
            }]
        }, {
            expanded: 0,
            label: 'Level one 2',
            children: [{
                expanded: 0,
                label: 'Level two 2-1',
                children: [{
                    expanded: 0,
                    label: 'Level three 2-1-1'
                }]
            }, {
                expanded: 0,
                label: 'Level two 2-2',
                children: [{
                    expanded: 0,
                    label: 'Level three 2-2-1'
                }]
            }]
        }, {
            expanded: 0,
            label: 'Level one 3',
            children: [{
                expanded: 0,
                label: 'Level two 3-1',
                children: [{
                    expanded: 0,
                    label: 'Level three 3-1-1'
                }]
            }, {
                expanded: 0,
                label: 'Level two 3-2',
                children: [{
                    expanded: 0,
                    label: 'Level three 3-2-1'
                }]
            }]
        }]
    }
}
