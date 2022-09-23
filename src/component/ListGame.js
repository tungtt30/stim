
import List from './ListItem/List.js'
import ListItem from './ListItem/ListItem.js'
import { listGame } from '../fakeData/game'



export default function ListGame({ game }) {
    return (
        <div className="divide-y divide-slate-10 w-auto">
            <List>
                {listGame.map((game) => {
                    return (<ListItem game={game} key={game.name} />)
                })}
            </List>
        </div>
    )
}
