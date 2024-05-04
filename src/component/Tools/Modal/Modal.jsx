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
            trigger={<Button>{props.buttonTitle}</Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Header icon={props.icon} content={props.title} />
            <ModalContent>
                {props.content}
            </ModalContent>
            <ModalActions>
                <Button color='red' inverted onClick={() => setOpen(false)}>
                    <Icon name='remove' /> No
                </Button>
                <Button color='green' inverted onClick={() => setOpen(false)}>
                    <Icon name='checkmark' /> Yes
                </Button>
            </ModalActions>
        </Modal>
    )
}

export default MyModal;