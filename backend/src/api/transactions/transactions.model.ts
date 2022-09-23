import {Model} from 'objection';
import schema from './transactions.schema.json'
import tablesNames from '../../constants/tableNames'

export default class Transaction extends Model {

    static get tableName(){
        return tablesNames.transaction;
    }

    static get jsonSchema() {
        return schema;
    }
    //TODO Create other models then apply relations
    static relationMappings = () => ({
        
    })
}