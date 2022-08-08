
export const toggleTemperature = ({ state, effects, actions }) => {
    if (state.temperatureType ==='C') {
        state.temperatureType = 'F'
    } else {
        state.temperatureType = 'C'
    }
}