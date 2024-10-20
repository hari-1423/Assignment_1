const express = require('express');
const router = express.Router();
const {create_rule,combine_rules,evaluate_rule} = require('../controllers/ruleController');

// creating a rule
router.post('/create', create_rule);

// combining rules
router.post('/combine', combine_rules);

// evaluating a rule
router.post('/evaluate', evaluate_rule);

module.exports = router;