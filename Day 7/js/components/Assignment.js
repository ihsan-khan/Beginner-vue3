export default {
    template: `
        <li>
            <label>
                <input type="checkbox" v-model="assignment.completed">
                {{ assignment.title }}
            </label>
        </li>
    `,
    props: {
        assignment: Object
    }
}