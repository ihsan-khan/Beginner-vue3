import AssignmentList from "./AssignmentList.js";
export default {
    components: {
        AssignmentList
    },
    template: `
        <section class="space-y-6">
            <AssignmentList :assignments="filter.inProgress" title="In Progress" />
            <AssignmentList :assignments="filter.completed" title="Completed" />
        </section>
    `,
    data(){
            return {
                assignments: [
                    { id: 1, title: 'Assignment 1', completed: true },
                    { id: 2, title: 'Assignment 2', completed: false },
                    { id: 3, title: 'Assignment 3', completed: true }
                ],
            }
        },
        computed: {
            filter(){
                return {
                    completed: this.assignments.filter(a => a.completed),
                    inProgress: this.assignments.filter(a => !a.completed)
                }
            }
        }
}