import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { DashboardContainer } from '../components/dashboard/common/DashboardContainer';
import SeekerMessagesHeader from '../components/dashboard/messages/SeekerMessagesHeader';
import EmployerMessagesHeader from '../components/dashboard/messages/EmployerMessagesHeader';
import MessagesList from '../components/dashboard/messages/MessagesList';
import NotificationsList from '../components/dashboard/messages/NotificationsList';

const Messages = () => {
    const [activeTab, setActiveTab] = useState('messages');
    const location = useLocation();
    const isEmployer = location.pathname.includes('employer');

    return (
        <DashboardContainer>
            {isEmployer ? (
                <EmployerMessagesHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            ) : (
                <SeekerMessagesHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            )}

            <AnimatePresence mode="wait">
                {activeTab === 'messages' ? (
                    <motion.div
                        key="messages"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <MessagesList mode={isEmployer ? 'employer' : 'seeker'} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="notifications"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <NotificationsList />
                    </motion.div>
                )}
            </AnimatePresence>
        </DashboardContainer>
    );
};

export default Messages;
