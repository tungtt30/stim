
import List from './ListItem/List.js'
import ListItem from './ListItem/ListItem.js'
import { useSelector } from 'react-redux'



export default function ListGame({ }) {
    const game = useSelector((state => state.listGame))
    return (
        <div className="divide-y divide-slate-10 w-auto">
            <List>
                {game.map((game, index) => {
                    return (<ListItem game={game} key={index} />)
                })}
            </List>
        </div>
    )
}
