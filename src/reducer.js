export const initialState = {
    user: null,
    // REMOVE after developing
    // token: 'BQBqueZYHtMT03VK5zaF8vC7uhZzxdfjiQI2d7IqyUAkV8pmEUjrmpSv3B1wIEwzmUiJmkzyI7B_qPMAeAHlUQ0ZfAVQqilqy7w5mXD0f9P97FGAXJZCNknRenVEeQP8At3T_Cv0DLCwhhUmlS0Glcq08QsRVk6-v4OB1JChe3doHpMN',
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state
    }
}

export default reducer