<?php defined('_JEXEC') or die;



$app = JFactory::getApplication();
$doc = JFactory::getDocument();
// $document= JFactory::getDocument();
// $document->addScript('components/com_djtabs/assets/script.js');

if(file_exists(JPATH_SITE.'/media/visuallyImpaired/css/formattingStyle.css')){
	$doc->addStyleSheet(JURI::base(TRUE).'/media/visuallyImpaired/css/formattingStyle.css');
}
if(file_exists(JPATH_SITE.'/media/visuallyImpaired/js/formattingStyle.js')){
	$doc->addScript(JURI::root(TRUE).'/media/visuallyImpaired/js/cookieFS.js');
	$doc->addScript(JURI::root(TRUE).'/media/visuallyImpaired/js/formattingStyle.js');
	// $doc->addScript('/media/visuallyImpaired/js/formattingStyle.js');
}



// require_once dirname(__FILE__) . '/helper.php';

 require JModuleHelper::getLayoutPath('mod_visuallyimpaired');

// require( JModuleHelper::getLayoutPath( 'mod_feedback' ) );


