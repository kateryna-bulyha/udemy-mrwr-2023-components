import Accordion from "../components/Accordion";

function AccordionPage () {
    const items = [
        {
            id: 'kdsvks',
            label: 'Can I use React on the project?',
            content: 'Yes, you can use React on any project!'
        },

        {
            id: 'kjnsvcsbk',
            label: 'Can I use JavaScript on the project?',
            content: 'Yes, you can use JavaScript on any project'
        },

        {
            id: 'ksfnva',
            label: 'Can I use CSS on the project?',
            content: 'Yes, you can use CSS on any project'
        }
    ]

    return <Accordion  items={items}/>;
}

export default AccordionPage;