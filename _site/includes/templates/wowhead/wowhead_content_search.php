<?php
$results = WoW_Search::GetResults();
?>
<div class="text">
<h1><?php echo WoW_Locale::GetString('template_search_header'); ?> <i><?php echo WoW_Template::GetPageData('search_query'); ?></i></h1>

</div>

<div id="jkbfksdbl4"></div>
<div id="lkljbjkb574" class="listview"></div>
<script type="text/javascript">//<![CDATA[
var _ = {};
<?php
if(isset($results['items']) && is_array($results['items'])) {
    foreach($results['items'] as &$item) {
        echo sprintf('_[%d]={name_enus:\'%s\',quality:%d,icon:\'%s\'};',
            $item['entry'],
            addslashes($item['name']),
            $item['quality'],
            addslashes($item['icon'])
        );
    }
}
?>
$.extend(true, g_items, _);
_ = g_items;
var _ = {};
_[27672]={name_enus:'Initiate Secret Technique',rank_enus:'',icon:'inv_misc_organ_01'};_[39923]={name_enus:'Legion Ring - Initiate TEST',rank_enus:'',icon:'trade_engineering'};_[47068]={name_enus:'Who Are They: Shadowy Initiate Kill Credit',rank_enus:'',icon:'trade_engineering'};_[51519]={name_enus:'Death Knight Initiate Visual',rank_enus:'',icon:'trade_engineering'};_[51520]={name_enus:'Death Knight Initiate (Male, Human)',rank_enus:'',icon:'trade_engineering'};_[51534]={name_enus:'Death Knight Initiate (Female, Human)',rank_enus:'',icon:'trade_engineering'};_[51535]={name_enus:'Death Knight Initiate (Male, Night Elf)',rank_enus:'',icon:'trade_engineering'};_[51536]={name_enus:'Death Knight Initiate (Female, Night Elf)',rank_enus:'',icon:'trade_engineering'};_[51537]={name_enus:'Death Knight Initiate (Female, Dwarf)',rank_enus:'',icon:'trade_engineering'};_[51538]={name_enus:'Death Knight Initiate (Male, Dwarf)',rank_enus:'',icon:'trade_engineering'};_[51539]={name_enus:'Death Knight Initiate (Male, Gnome)',rank_enus:'',icon:'trade_engineering'};_[51540]={name_enus:'Death Knight Initiate (Female, Gnome)',rank_enus:'',icon:'trade_engineering'};_[51541]={name_enus:'Death Knight Initiate (Male, Draenei)',rank_enus:'',icon:'trade_engineering'};_[51542]={name_enus:'Death Knight Initiate (Female, Draenei)',rank_enus:'',icon:'trade_engineering'};_[51543]={name_enus:'Death Knight Initiate (Male, Orc)',rank_enus:'',icon:'trade_engineering'};_[51544]={name_enus:'Death Knight Initiate (Female, Orc)',rank_enus:'',icon:'trade_engineering'};_[51545]={name_enus:'Death Knight Initiate (Female, Troll)',rank_enus:'',icon:'trade_engineering'};_[51546]={name_enus:'Death Knight Initiate (Male, Troll)',rank_enus:'',icon:'trade_engineering'};_[51547]={name_enus:'Death Knight Initiate (Male, Tauren)',rank_enus:'',icon:'trade_engineering'};_[51548]={name_enus:'Death Knight Initiate (Female, Tauren)',rank_enus:'',icon:'trade_engineering'};_[51549]={name_enus:'Death Knight Initiate (Male, Forsaken)',rank_enus:'',icon:'trade_engineering'};_[51550]={name_enus:'Death Knight Initiate (Female, Forsaken)',rank_enus:'',icon:'trade_engineering'};_[51551]={name_enus:'Death Knight Initiate (Male, Blood Elf)',rank_enus:'',icon:'trade_engineering'};_[51552]={name_enus:'Death Knight Initiate (Female, Blood Elf)',rank_enus:'',icon:'trade_engineering'};_[52546]={name_enus:'Initiate Kill Check',rank_enus:'',icon:'trade_engineering'};_[62722]={name_enus:'Tournament - Mounted Melee - GOSSIP - Initiate Combat',rank_enus:'',icon:'trade_engineering'};_[86201]={name_enus:'A Fiery Reunion: Initiate Goldmine Channel at Magmatooth',rank_enus:'',icon:'trade_engineering'};_[86730]={name_enus:'Mr. Goldmine\'s Wild Ride: Summon Initiate Goldmine QG',rank_enus:'',icon:'trade_engineering'};_[86735]={name_enus:'Initiate Goldmine',rank_enus:'',icon:'achievement_boss_mekgineer_thermaplugg-'};_[86739]={name_enus:'Mr. Goldmine\'s Wild Ride: Resummon Initiate Goldmine QG',rank_enus:'',icon:'trade_engineering'};_[75834]={name_enus:'Initiates Ready',rank_enus:'',icon:'trade_engineering'};
$.extend(true, g_spells, _);
_ = g_spells;
var myTabs = new Tabs({parent: $WH.ge('jkbfksdbl4')});
<?php
if(isset($results['items']) && is_array($results['items'])) {
    echo 'new Listview({template: \'item\', id: \'items\', name: LANG.tab_items, tabs: myTabs, parent: \'lkljbjkb574\', note: $WH.sprintf(LANG.lvnote_filterresults, \'' . WoW::GetWoWPath() . '/items?filter=na=' . addslashes(WoW_Template::GetPageData('search_query')) . '\'), data: [';
    $count = count($results['items']);
    $current = 1;
    foreach($results['items'] as &$item) {
        $item_fields_count = count($item);
        $current_field = 1;
        echo '{';
        foreach($item as $field => $value) {
            if(in_array($field, array('entry', 'icon'))) {
                ++$current_field;
                continue;
            }
            if((intval($value) == $value) || strpos($value, '{') !== false) {
                echo '"' . $field . '":"' ;
                if($field == 'name') {
                    echo (7 - $item['quality']);
                }
                echo str_replace('"', '\"', $value) . '"';
            }
            else {
                echo '"' . $field . '":' . $value;
            }
            if($current_field < $item_fields_count) {
                echo ',';
            }
            ++$current_field;
        }
        echo '}';
        if($current < $count) {
            echo ',';
        }
        ++$current;
    }
    echo ']});';
}
?>
new Listview({template: 'npc', id: 'npcs', name: LANG.tab_npcs, tabs: myTabs, parent: 'lkljbjkb574', note: $WH.sprintf(LANG.lvnote_filterresults, '/npcs?filter=na=Initiate'), data: [{"classification":0,"id":44786,"location":[130],"maxlevel":11,"minlevel":8,"name":"Apothecary Initiate","react":[undefined,1],"type":7},{"classification":0,"id":16384,"name":"Argent Dawn Initiate","tag":"The Argent Dawn","type":7},{"classification":0,"id":21284,"location":[3519],"maxlevel":66,"minlevel":65,"name":"Auchenai Initiate","react":[-1,-1],"type":7},{"classification":0,"id":32238,"location":[210],"maxlevel":80,"minlevel":80,"name":"Bitter Initiate","react":[-1,-1],"tag":"Cult of the Damned","type":7},{"classification":0,"id":21907,"location":[3519],"maxlevel":63,"minlevel":62,"name":"Cabal Initiate","react":[-1,-1],"type":7},{"classification":0,"id":28392,"location":[4298],"maxlevel":55,"minlevel":55,"name":"Death Knight Initiate","react":[1,1],"type":7},{"classification":0,"id":28390,"location":[4298],"maxlevel":55,"minlevel":55,"name":"Death Knight Initiate","react":[1,1],"type":7},{"classification":0,"id":28393,"location":[4298],"maxlevel":55,"minlevel":55,"name":"Death Knight Initiate","react":[1,1],"type":7},{"classification":0,"id":28394,"location":[4298],"maxlevel":55,"minlevel":55,"name":"Death Knight Initiate","react":[1,1],"type":7},{"classification":0,"id":28406,"location":[4298],"maxlevel":55,"minlevel":55,"name":"Death Knight Initiate","react":[-1,-1],"type":6},{"classification":0,"id":31327,"location":[210],"maxlevel":80,"minlevel":80,"name":"Death Knight Initiate","react":[-1,-1],"tag":"Host of Suffering","type":6},{"classification":0,"id":28391,"location":[4298],"maxlevel":55,"minlevel":55,"name":"Death Knight Initiate","react":[1,1],"type":7},{"classification":0,"id":31326,"location":[210],"maxlevel":80,"minlevel":80,"name":"Death Knight Initiate","react":[-1,-1],"tag":"Host of Suffering","type":6},{"classification":0,"id":30957,"location":[210],"maxlevel":80,"minlevel":80,"name":"Death Knight Initiate","react":[0,-1],"tag":"Host of Suffering","type":6},{"classification":0,"id":30958,"location":[210],"maxlevel":80,"minlevel":80,"name":"Death Knight Initiate","react":[-1,0],"tag":"Host of Suffering","type":6},{"classification":0,"id":21180,"location":[3520],"maxlevel":70,"minlevel":70,"name":"Demon Hunter Initiate","react":[-1,-1],"type":7},{"classification":0,"id":46694,"location":[3],"maxlevel":45,"minlevel":40,"name":"Dustbelcher Initiate","react":[-1,-1],"type":7},{"classification":0,"id":32468,"location":[210],"maxlevel":80,"minlevel":80,"name":"Ebon Blade Initiate","react":[1,1],"type":7},{"classification":1,"id":24918,"location":[3483],"maxlevel":70,"minlevel":70,"name":"Felblood Initiate","react":[-1,-1],"type":7},{"classification":1,"id":7461,"location":[618],"name":"Hederine Initiate","react":[-1,-1],"type":3},{"classification":0,"id":9085,"location":[3],"name":"Initiate Amakkar","react":[undefined,1],"tag":"Kargath Expeditionary Force","type":7},{"classification":0,"id":30308,"location":[210],"maxlevel":80,"minlevel":80,"name":"Initiate Brenners","react":[1,1],"tag":"Innkeeper","type":7},{"classification":0,"id":30067,"location":[210],"maxlevel":80,"minlevel":80,"name":"Initiate Claget","react":[1,1],"tag":"Blades","type":7},{"classification":0,"id":18174,"location":[3487],"maxlevel":20,"minlevel":20,"name":"Initiate Colin","react":[undefined,1],"type":7},{"classification":0,"id":18175,"location":[3487],"maxlevel":20,"minlevel":20,"name":"Initiate Emeline","react":[undefined,1],"type":7},{"classification":0,"id":30070,"location":[210],"maxlevel":80,"minlevel":80,"name":"Initiate Gahark","react":[1,1],"tag":"General Goods","type":7},{"classification":0,"id":42574,"location":[5042],"maxlevel":82,"minlevel":82,"name":"Initiate Goldmine","react":[1,1],"type":7},{"classification":0,"id":46243,"location":[4922],"maxlevel":84,"minlevel":84,"name":"Initiate Goldmine","react":[1,1],"type":7},{"classification":1,"id":45432,"location":[4922],"maxlevel":85,"minlevel":85,"name":"Initiate Goldmine","react":[1,1],"tag":"The Earthen Ring","type":7},{"classification":1,"id":47999,"location":[4922],"maxlevel":85,"minlevel":85,"name":"Initiate Goldmine","react":[1,1],"tag":"The Earthen Ring","type":7},{"classification":0,"id":46472,"location":[4922],"maxlevel":84,"minlevel":84,"name":"Initiate Goldmine","react":[1,1],"type":7},{"classification":0,"id":46513,"name":"Initiate Goldmine","type":7},{"classification":0,"id":27299,"location":[3537],"maxlevel":72,"minlevel":72,"name":"Initiate Greer","react":[1,1],"type":7},{"classification":0,"id":27271,"location":[3537],"maxlevel":72,"minlevel":72,"name":"Initiate Knapp","react":[1,1],"type":7},{"classification":0,"id":27291,"location":[3537],"maxlevel":72,"minlevel":72,"name":"Initiate Mehrtens","react":[1,1],"tag":"Test Goods","type":7},{"classification":0,"id":27302,"location":[3537],"maxlevel":72,"minlevel":72,"name":"Initiate Park","react":[1,1],"type":7},{"classification":0,"id":30069,"location":[210],"maxlevel":80,"minlevel":80,"name":"Initiate Roderick","react":[1,1],"tag":"Poisons & Reagents","type":7},{"classification":0,"id":27300,"location":[3537],"maxlevel":72,"minlevel":72,"name":"Initiate Vernon","react":[1,1],"type":7},{"classification":0,"id":32545,"location":[139],"maxlevel":55,"minlevel":55,"name":"Initiate's Training Dummy","react":[0,0],"type":9},{"classification":0,"id":32541,"location":[4298],"maxlevel":55,"minlevel":55,"name":"Initiate's Training Dummy","react":[0,0],"type":9},{"classification":1,"id":26728,"location":[4265],"maxlevel":80,"minlevel":71,"name":"Mage Hunter Initiate","react":[-1,-1],"type":7},{"classification":0,"id":46611,"location":[4922],"maxlevel":85,"minlevel":85,"name":"Magmatooth","react":[-1,-1],"tag":"Initiate Goldmine's Fire Elemental","type":4},{"classification":0,"id":45099,"location":[5042],"maxlevel":82,"minlevel":81,"name":"Magmatooth","react":[-1,-1],"tag":"Initiate Goldmine's Fire Elemental","type":4},{"classification":1,"id":10420,"location":[2017],"maxlevel":46,"minlevel":45,"name":"Risen Initiate","react":[-1,-1],"type":6},{"classification":0,"id":1507,"location":[85],"maxlevel":4,"minlevel":3,"name":"Scarlet Initiate","react":[undefined,0],"type":7},{"classification":1,"id":18318,"location":[3791],"maxlevel":70,"minlevel":65,"name":"Sethekk Initiate","react":[-1,-1],"type":7},{"classification":0,"id":18716,"location":[3519],"maxlevel":62,"minlevel":62,"name":"Shadowy Initiate","react":[1,1],"type":7},{"classification":0,"id":27627,"location":[394],"maxlevel":74,"minlevel":74,"name":"Tatjana","react":[-1,-1],"tag":"Wolfcult Initiate","type":7},{"classification":0,"id":40185,"location":[616],"maxlevel":80,"minlevel":80,"name":"Twilight Initiate","react":[1,1],"type":7},{"classification":0,"id":30114,"location":[4494],"maxlevel":80,"minlevel":74,"name":"Twilight Initiate","react":[-1,-1],"type":7},{"classification":0,"id":40562,"location":[616],"maxlevel":80,"minlevel":79,"name":"Twilight Initiate","react":[-1,-1],"type":7},{"classification":0,"id":21870,"name":"Unliving Initiate","type":6},{"classification":0,"id":29567,"location":[4298],"maxlevel":55,"minlevel":55,"name":"Unworthy Initiate","react":[0,0],"type":6},{"classification":0,"id":29520,"location":[4298],"maxlevel":55,"minlevel":55,"name":"Unworthy Initiate","react":[0,0],"type":6},{"classification":0,"id":29565,"location":[4298],"maxlevel":55,"minlevel":55,"name":"Unworthy Initiate","react":[0,0],"type":6},{"classification":0,"id":29566,"location":[4298],"maxlevel":55,"minlevel":55,"name":"Unworthy Initiate","react":[0,0],"type":6},{"classification":0,"id":29519,"location":[4298],"maxlevel":55,"minlevel":55,"name":"Unworthy Initiate","react":[0,0],"type":6},{"classification":0,"id":29521,"name":"Unworthy Initiate Anchor","type":10},{"classification":0,"id":27547,"location":[394],"maxlevel":74,"minlevel":74,"name":"Vladek","react":[-1,-1],"tag":"Wolfcult Initiate","type":7},{"classification":0,"id":26416,"location":[394],"maxlevel":74,"minlevel":73,"name":"Wolfcult Initiate","react":[-1,-1],"type":7}]});
new Listview({template: 'object', id: 'objects', name: LANG.tab_objects, tabs: myTabs, parent: 'lkljbjkb574', note: $WH.sprintf(LANG.lvnote_filterresults, '/objects?filter=na=Initiate'), data: [{"id":206567,"name":"Cult Initiate Robes","type":-2},{"id":206568,"name":"Cult Initiate Robes","type":-2},{"id":207677,"name":"Spare Initiate Robes","type":-2},{"id":207678,"name":"Spare Initiate's Robes","type":-2}]});
new Listview({template: 'spell', id: 'spells', name: LANG.tab_uncategorizedspells, tabs: myTabs, parent: 'lkljbjkb574', note: $WH.sprintf(LANG.lvnote_filterresults, '/spells=0?filter=na=Initiate'), visibleCols: ['level'], hiddenCols: ['reagents', 'skill'], data: [{"cat":0,"id":86201,"level":0,"name":"@A Fiery Reunion: Initiate Goldmine Channel at Magmatooth","schools":1},{"cat":0,"id":51552,"level":0,"name":"@Death Knight Initiate (Female, Blood Elf)","schools":1},{"cat":0,"id":51542,"level":0,"name":"@Death Knight Initiate (Female, Draenei)","schools":1},{"cat":0,"id":51537,"level":0,"name":"@Death Knight Initiate (Female, Dwarf)","schools":1},{"cat":0,"id":51550,"level":0,"name":"@Death Knight Initiate (Female, Forsaken)","schools":1},{"cat":0,"id":51540,"level":0,"name":"@Death Knight Initiate (Female, Gnome)","schools":1},{"cat":0,"id":51534,"level":0,"name":"@Death Knight Initiate (Female, Human)","schools":1},{"cat":0,"id":51536,"level":0,"name":"@Death Knight Initiate (Female, Night Elf)","schools":1},{"cat":0,"id":51544,"level":0,"name":"@Death Knight Initiate (Female, Orc)","schools":1},{"cat":0,"id":51548,"level":0,"name":"@Death Knight Initiate (Female, Tauren)","schools":1},{"cat":0,"id":51545,"level":0,"name":"@Death Knight Initiate (Female, Troll)","schools":1},{"cat":0,"id":51551,"level":0,"name":"@Death Knight Initiate (Male, Blood Elf)","schools":1},{"cat":0,"id":51541,"level":0,"name":"@Death Knight Initiate (Male, Draenei)","schools":1},{"cat":0,"id":51538,"level":0,"name":"@Death Knight Initiate (Male, Dwarf)","schools":1},{"cat":0,"id":51549,"level":0,"name":"@Death Knight Initiate (Male, Forsaken)","schools":1},{"cat":0,"id":51539,"level":0,"name":"@Death Knight Initiate (Male, Gnome)","schools":1},{"cat":0,"id":51520,"level":0,"name":"@Death Knight Initiate (Male, Human)","schools":1},{"cat":0,"id":51535,"level":0,"name":"@Death Knight Initiate (Male, Night Elf)","schools":1},{"cat":0,"id":51543,"level":0,"name":"@Death Knight Initiate (Male, Orc)","schools":1},{"cat":0,"id":51547,"level":0,"name":"@Death Knight Initiate (Male, Tauren)","schools":1},{"cat":0,"id":51546,"level":0,"name":"@Death Knight Initiate (Male, Troll)","schools":1},{"cat":0,"id":51519,"level":0,"name":"@Death Knight Initiate Visual","schools":1},{"cat":0,"id":86735,"level":0,"name":"@Initiate Goldmine","schools":1},{"cat":0,"id":52546,"level":0,"name":"@Initiate Kill Check","schools":1},{"cat":0,"id":27672,"level":0,"name":"@Initiate Secret Technique","schools":1},{"cat":0,"id":75834,"level":0,"name":"@Initiates Ready","schools":1},{"cat":0,"id":39923,"level":0,"name":"@Legion Ring - Initiate TEST","schools":1},{"cat":0,"id":86739,"level":0,"name":"@Mr. Goldmine's Wild Ride: Resummon Initiate Goldmine QG","schools":1},{"cat":0,"id":86730,"level":0,"name":"@Mr. Goldmine's Wild Ride: Summon Initiate Goldmine QG","schools":1},{"cat":0,"id":62722,"level":0,"name":"@Tournament - Mounted Melee - GOSSIP - Initiate Combat","schools":1},{"cat":0,"id":47068,"level":0,"name":"@Who Are They: Shadowy Initiate Kill Credit","schools":1}]});
myTabs.flush();
//]]></script>
