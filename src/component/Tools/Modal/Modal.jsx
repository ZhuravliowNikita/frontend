import React from 'react'

import {
    ModalContent,
    Button,
    Header,
    Modal,
    ModalActions,
    Icon,
} from 'semantic-ui-react'

function MyModal(props) {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            closeIcon
            open={open}
            trigger={<Button color='blue'>{props.buttonTitle}</Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Header icon={props.icon} content={props.title} />
            <ModalContent>
                {props.content}
            </ModalContent>
        </Modal>
    )
}

export default MyModal;