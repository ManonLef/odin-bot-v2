const { SlashCommandBuilder } = require("discord.js");
const GifsService = require("../../services/gifs/gifs.service");

function dab(command) {
  command
    .setName("dab")
    .setDescription("insert gif here")
    .addUserOption((option) => {
      option.setName("name").setDescription("user to ping").setRequired(false);
      return option;
    });
  return command;
}

function motivate(command) {
  command
    .setName("motivate")
    .setDescription("insert gif here")
    .addUserOption((option) => {
      option.setName("name").setDescription("user to ping").setRequired(false);
      return option;
    });
  return command;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gif")
    .setDescription("gifs")
    .addSubcommand(dab)
    .addSubcommand(motivate),
  execute: async (interaction) => {
    try {
      GifsService.handleInteraction(interaction);
    } catch (error) {
      console.log(error);
    }
  },
};
