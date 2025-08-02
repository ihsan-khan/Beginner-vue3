import Assignment from './Assignment.js';
export default {
    components: {
        Assignment
    },
    template: `<section v-show="assignments.length">
            <h1>{{ title }}</h1>
            <ul>
                <Assignment v-for="assignment in assignments" :key="assignment.id" :assignment="assignment" />
            </ul>
        </section>`,
        props: {
            assignments: Array,
            title: String
        },
        props: {
            assignments: Array,
            title: String
        }
}