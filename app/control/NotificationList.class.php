<?php
class NotificationList extends TElement
{
    public function __construct($param)
    {
        parent::__construct('ul');
        
        try
        {
            TTransaction::open('communication');
            // load the messages to the logged user
            $system_notifications = SystemNotification::where('checked', '=', 'N')->where('system_user_to_id', '=', TSession::getValue('userid'))->orderBy('id', 'desc')->load();
            
            if ($param['theme'] == 'theme2')
            {
                $this->class = 'dropdown-menu dropdown-alerts';
                
                $a = new TElement('a');
                $a->{'class'} = "dropdown-toggle";
                $a->{'data-toggle'}="dropdown";
                $a->{'href'} = "#";
                
                $a->add( TElement::tag('i',    '', array('class'=>"fa fa-bell-o fa-fw")) );
                $a->add( TElement::tag('span', count($system_notifications), array('class'=>"badge badge-notify")) );
                $a->add( TElement::tag('i',    '', array('class'=>"fa fa-caret-down")) );
                $a->show();
                
                foreach ($system_notifications as $system_notification)
                {
                    $date    = $this->getShortPastTime($system_notification->dt_message);
                    $subject = $system_notification->subject;
                    $icon    = $system_notification->icon ? $system_notification->icon : 'fa fa-bell-o blue';
                    
                    $li  = new TElement('li');
                    $a   = new TElement('a');
                    $div = new TElement('div');
                    
                    $a->href = 'index.php?class=SystemNotificationFormView&method=onView&id='.$system_notification->id;
                    $a->generator = 'adianti';
                    $li->add($a);
                    $a->add($div);
                    $div->add( TElement::tag('i', '', array('class'=>$icon)) );
                    $div->add( $subject );
                    $div->add( TElement::tag('span', $date, array('class' => 'pull-right text-muted small') ) );
                    
                    parent::add($li);
                    parent::add( TElement::tag('li', '', array('class' => 'divider') ) );
                }
                
                $li = new TElement('li');
                $a = new TElement('a');
                $li->add($a);
                $a->class='text-center';
                $a->href = 'index.php?class=SystemNotificationList';
                $a->generator = 'adianti';
                $a->add( TElement::tag('strong', 'See alerts') );
                parent::add($li);
            }
            else if ($param['theme'] = 'theme3')
            {
                $this->class = 'dropdown-menu';
                
                $a = new TElement('a');
                $a->{'class'} = "dropdown-toggle";
                $a->{'data-toggle'}="dropdown";
                $a->{'href'} = "#";
                
                $a->add( TElement::tag('i',    '', array('class'=>"fa fa-bell-o fa-fw")) );
                $a->add( TElement::tag('span', count($system_notifications), array('class'=>"label label-warning")) );
                $a->show();
                
                $li_master = new TElement('li');
                $ul_wrapper = new TElement('ul');
                $ul_wrapper->{'class'} = 'menu';
                $li_master->add($ul_wrapper);
                parent::add($li_master);
                
                foreach ($system_notifications as $system_notification)
                {
                    $date    = $this->getShortPastTime($system_notification->dt_message);
                    $subject = $system_notification->subject;
                    $icon    = $system_notification->icon ? $system_notification->icon : 'fa fa-bell-o text-aqua';
                    
                    $li  = new TElement('li');
                    $a   = new TElement('a');
                    $div = new TElement('div');
                    
                    $a->href = 'index.php?class=SystemNotificationFormView&method=onView&id='.$system_notification->id;
                    $a->generator = 'adianti';
                    $li->add($a);
                    
                    $i = new TElement('i');
                    $i->{'class'} = $icon;
                    $a->add($i);
                    $a->add($subject);
                    $a->add( TElement::tag('span', $date, array('class' => 'pull-right text-muted small') ) );
                    
                    $ul_wrapper->add($li);
                }
                
                parent::add(TElement::tag('li', TElement::tag('a', 'View all', array('href'=>'index.php?class=SystemNotificationList', 'generator'=>'adianti') ), array('class'=>'footer')));
            }
            TTransaction::close();
        }
        catch (Exception $e)
        {
            new TMessage('error', $e->getMessage());
        }
    }
    
    public function getShortPastTime($from)
    {
        $to = date('Y-m-d H:i:s');
        $start_date = new DateTime($from);
        $since_start = $start_date->diff(new DateTime($to));
        if ($since_start->y > 0)
            return $since_start->y.' years ';
        if ($since_start->m > 0)
            return $since_start->m.' months ';
        if ($since_start->d > 0)
            return $since_start->d.' days ';
        if ($since_start->h > 0)
            return $since_start->h.' hours ';
        if ($since_start->i > 0)
            return $since_start->i.' minutes ';
        if ($since_start->s > 0)
            return $since_start->s.' seconds ';    
    }
}
