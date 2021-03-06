import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'
import propTypes from 'prop-types'

function FeedbackItem({item,handleDelete}) {

    // const handleClick = (id) => {
    //     console.log(id)
    // }
    return (
        <Card >
            <div className="num-display">{item.rating}</div>
            <button onClick={()=> handleDelete(item.id)} className="close">
                <FaTimes  color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )

}

FeedbackItem.propTypes = {
    item : propTypes.object.isRequired,
}

export default FeedbackItem 