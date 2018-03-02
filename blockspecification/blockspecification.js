/**
 * Specification of blocks.
 *
 * Specifications of the blocks. See wiki: https://github.com/scratch4d/scratch-LN/wiki/blockspecifications
 *
 * @file   This files defines the blockspecifications const.
 * @author Ellen Vanhove.
 */
import {universalBlockConverter} from "../parser/blocks";
import blocks from "../parser/blocks";

/*
 {"template":"",
        "description": ,
            "converter": universalBlockConverter
        }

 */
export const blockspecifications = [
        { //this is already a special case
        "template": ["go to %1"],
        "description": {
            "type": "looks_gotofrontback",
            "args": [{"type": "field_dropdown", "name": "FRONT_BACK", "options": [["front", "front"], ["back", "back"]]}],
            "shape": "statement"
        },
        "converter": universalBlockConverter, //how do i do this???
        "predicate": (ctx,visitor) => {
            let arg = visitor.getString(ctx.argument[0]);
            return (arg === 'front' || arg === 'back') ;
        }
        
    }, 
    {
            "template": ["pen down"],
            "description": {"type": "pen_pendown", "shape": "statement"},
            "converter": universalBlockConverter
        },
        {
            "template": ["say %1"],
            "description": {
                "type": "looks_say",
                "args": [{"type": "input_value", "name": "MESSAGE"}],
                "shape": "statement"
            },
            "converter": universalBlockConverter
        }, {
            "template": "go to x: %1 y: %2",
            "description": {
                "type": "motion_gotoxy",
                "args": [{"type": "input_value", "name": "X"}, {"type": "input_value", "name": "Y"}],
                "shape": "statement"
            },
            "converter": universalBlockConverter
        }, {
            "template": "set rotation style %1",
            "description": {
                "type": "motion_setrotationstyle",
                "args": [{
                    "type": "field_dropdown",
                    "name": "STYLE",
                    "options": [["left-right", "left-right"], ["don't rotate", "don't rotate"], ["all around", "all around"]]
                }],
                "shape": "statement"
            },
            "converter": universalBlockConverter
        }


    ]
;
