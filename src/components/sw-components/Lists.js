import ItemList from '../ItemList/ItemList';
import  WithData from '../HocHelpers/WithData';
import WithSwapiService from '../HocHelpers/WithSwapiService';

const mapPersonToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople,
    }
}

const mapPlanetToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets,
    }
}

const mapStarshipToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships,
    }
}

const PersonList = WithSwapiService( WithData(ItemList), mapPersonToProps);
const StarshipList = WithSwapiService( WithData(ItemList), mapStarshipToProps);
const PlanetList =  WithSwapiService( WithData(ItemList), mapPlanetToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
};

