export class Experience {
    title: string = '';
    start: string = '';
    end: string = '';
    description: string = '';
    bonus?: string = '';
    end_info?: { link: string, text: string } = {
        link: '',
        text: ''
    }
    constructor(title: string, start: string, end: string, description: string, bonus: string = '') {
        this.title = title;
        this.start = start;
        this.end = end;
        this.description = description;
        this.bonus = bonus;
    }
}