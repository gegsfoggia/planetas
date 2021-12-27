const { Planet } = require("../source/Planet")
const { calculateDistance } = require('../source/PlanetPositionHelper')

describe('Planet position helper', () => {

    let distance
    const ferengiPlanet = {}
    const vulcanoPlanet = {}
    const betasoidePlanet = {}

    const whenDistanceBetweenPlanetsIsCalculatedOnDay = (firstPlanet, secondPlanet, day) => {
        distance = calculateDistance(firstPlanet, secondPlanet, day)
    }

    const thenDistanceShouldBe = aDistance => {
        expect(distance).toEqual(aDistance)
    }

    describe('Distance calculations', () => {
        it('Should return 1500', () => {
            whenDistanceBetweenPlanetsIsCalculatedOnDay(ferengiPlanet, vulcanoPlanet, 150)
            thenDistanceShouldBe(1500)
        })
    
        it('Should return 2500', () => {
            whenDistanceBetweenPlanetsIsCalculatedOnDay(ferengiPlanet, betasoidePlanet, 90)
            thenDistanceShouldBe(2500)
        })
    })

})