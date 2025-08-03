import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from './AssignmentCreate.js';
export default {
    components: {
        AssignmentList,
        AssignmentCreate
    },
    template: `
        <section class="space-y-6">
            <AssignmentList :assignments="filter.inProgress" title="In Progress" />
            <AssignmentList :assignments="filter.completed" title="Completed" />
            <AssignmentCreate @add="add" />
        </section>
        
    `,
    data(){
            return {
                assignments: [
                    { id: 1, title: 'Assignment 1', completed: true },
                    { id: 2, title: 'Assignment 2', completed: false },
                    { id: 3, title: 'Assignment 3', completed: true }
                ],
                newAssignment: ''
            }

        },
        computed: {
            filter(){
                return {
                    completed: this.assignments.filter(a => a.completed),
                    inProgress: this.assignments.filter(a => !a.completed)
                }
            }
        },
    methods: {
        add(name) {
            if (name.trim() === '') return;
            this.assignments.push({
                id: this.assignments.length + 1,
                title: name,
                completed: false
            });
        }
    },
}