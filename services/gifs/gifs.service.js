const { EmbedBuilder } = require("discord.js");

class GifsService {
  static async handleInteraction(interaction) {
    if (interaction.options.getSubcommand() === "dab") {
      GifsService.dabbing(interaction);
    } else if (interaction.options.getSubcommand() === "motivate") {
      GifsService.motivated(interaction);
    } else {
      GifsService.displayInfo(interaction);
    }
  }

  static async dabbing(interaction) {
    const dab = new EmbedBuilder()
      .setColor("#cc9543")
      .setTitle("Points in the TOP Discord server")
      .setDescription("dabs");

    const user = interaction.options.getUser("name");

    await interaction.reply({
      content: user ? `${user}` : "",
      embeds: [dab],
    });
  }

  static async motivated(interaction) {
    const motivate = new EmbedBuilder()
      .setColor("#cc9543")
      .setTitle("Points in the TOP Discord server")
      .setDescription("motivated much");

    const user = interaction.options.getUser("name");
    console.log(interaction)

    await interaction.reply({
      content: user ? `${user}` : "",
      embeds: [motivate],
    });
  }

  static async displayInfo(interaction) {
    const motivate = new EmbedBuilder()
      .setColor("#cc9543")
      .setTitle("test")
      .setDescription("motivated notscgjdksahkjfhdsa");

    await interaction.reply({
      embeds: [motivate],
    });
  }
}

module.exports = GifsService;
