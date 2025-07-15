// This file contains the main logic for migrating user registrations from the "completar cadastro" to the user database.

import { getUsersFromCompletarCadastro, addUserToDatabase } from './utils/firestore';

async function migrateUsers() {
    try {
        // Retrieve users from the "completar cadastro"
        const users = await getUsersFromCompletarCadastro();
        
        if (!users || users.length === 0) {
            console.log('No users found to migrate.');
            return;
        }

        // Migrate each user to the user database
        for (const user of users) {
            await addUserToDatabase(user);
            console.log(`Migrated user: ${user.nome} (${user.email})`);
        }

        console.log('User migration completed successfully.');
    } catch (error) {
        console.error('Error during user migration:', error);
    }
}

// Execute the migration
migrateUsers();
